const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname, '..')));

// Configuração do Nodemailer (Gmail)
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    family: 4,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verificar conexão com o e-mail ao iniciar
transporter.verify()
    .then(() => console.log('✅ Servidor de e-mail conectado com sucesso!'))
    .catch((err) => console.error('❌ Erro na conexão com e-mail:', err.message));

// Mapa dos assuntos para texto legível
const assuntosMap = {
    matricula: '📝 Quero matricular meu filho(a)',
    informacoes: 'ℹ️ Informações sobre o clube',
    eventos: '📅 Eventos e atividades',
    voluntario: '🤝 Quero ser voluntário',
    outro: '💬 Outro assunto',
};

// Rota POST para envio do formulário
app.post('/api/contato', async (req, res) => {
    const { nome, email, telefone, assunto, mensagem } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !email || !assunto || !mensagem) {
        return res.status(400).json({
            success: false,
            message: 'Preencha todos os campos obrigatórios.',
        });
    }

    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'E-mail inválido.',
        });
    }

    // Montar o e-mail
    const assuntoTexto = assuntosMap[assunto] || assunto;

    const mailOptions = {
        from: `"Site Léo Ranzolin" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `[Contato Site] ${assuntoTexto} - ${nome}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #1a237e, #283593); color: white; padding: 20px; text-align: center;">
                    <h1 style="margin: 0; font-size: 22px;">📬 Nova Mensagem do Site</h1>
                    <p style="margin: 5px 0 0; opacity: 0.9;">Desbravadores Léo Ranzolin</p>
                </div>
                
                <div style="padding: 25px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 120px;">👤 Nome:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${nome}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">✉️ E-mail:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                <a href="mailto:${email}" style="color: #1a237e;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">📱 Telefone:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${telefone || 'Não informado'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">📋 Assunto:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${assuntoTexto}</td>
                        </tr>
                    </table>
                    
                    <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px; border-left: 4px solid #1a237e;">
                        <strong style="color: #555;">💬 Mensagem:</strong>
                        <p style="margin: 10px 0 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${mensagem}</p>
                    </div>
                </div>
                
                <div style="background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #888;">
                    Mensagem enviada pelo formulário de contato do site.
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ E-mail enviado de ${nome} (${email})`);
        res.status(200).json({
            success: true,
            message: 'Mensagem enviada com sucesso!',
        });
    } catch (error) {
        console.error('❌ Erro ao enviar e-mail:', error.message);
        res.status(500).json({
            success: false,
            message: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
        });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
