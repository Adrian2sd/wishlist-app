# Formulario controlado con validación

El componente `ItemForm` usa `useState` para cada campo. Al enviar, se validan:
- name obligatorio
- price debe ser un número positivo
- link debe ser una URL válida (opcional si está vacío)

Se muestran mensajes de error debajo de cada campo. Al enviar, se llama a `onSubmit` con los datos.

Ejemplo de estructura del estado:
const [formData, setFormData] = useState({ name: '', description: '', price: '', link: '', priority: 'media', category: '' });