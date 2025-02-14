import { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/96ecacdb4d6311506b4b")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        return response.json();
      })
      .then((data) => {
        setOptions(data.options);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "O nome é obrigatório";

    if (!formData.email) newErrors.email = "O email é obrigatório";

    if (!formData.feedbackType)
      newErrors.feedbackType = "Escolha um tipo de feedback";

    if (!formData.message)
      newErrors.message = "A mensagem não pode estar vazia";

    if (formData.email && !validateEmail(formData.email))
      newErrors.email = "Digite um email válido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Dados enviados:", formData);
      alert(
        `Obrigado, ${formData.name}! Seu feedback foi enviado com sucesso!`
      );
    }
  };

  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
      className="p-4 bg-light border rounded"
    >
      <FormGroup>
        <Label for="name">Nome</Label>
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          invalid={!!errors.name}
        />
        <FormFeedback>{errors.name}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          invalid={!!errors.email}
        />
        <FormFeedback>{errors.email}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="feedbackType">Tipo de Feedback</Label>
        <Input
          type="select"
          id="feedbackType"
          value={formData.feedbackType}
          onChange={(e) =>
            setFormData({ ...formData, feedbackType: e.target.value })
          }
          invalid={!!errors.feedbackType}
        >
          <option value="">Selecione...</option>
          {options.map((option) => (
            <option key={option.id} value={option.label}>
              {option.label}
            </option>
          ))}
        </Input>
        <FormFeedback>{errors.feedbackType}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="message">Mensagem</Label>
        <Input
          type="textarea"
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          invalid={!!errors.message}
        />
        <FormFeedback>{errors.message}</FormFeedback>
      </FormGroup>
      <Button color="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
