interface EmailTemplateProps {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export default function EmailTemplate({ name, subject, email, message }: EmailTemplateProps) {
  return (
    <html lang="en">
      <body>
        <h1>Nuevo mensaje desde el Portafolio virtual</h1>
        <p>Detalle: {subject}</p>
        <p>Nombre del remitente: {name}</p>
        <p>Email: {email}</p>
        <p>Mensaje: {message}</p>
      </body>
    </html>
  );
}
