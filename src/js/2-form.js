const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);

    formData.email = parsedData.email ?? '';
    formData.message = parsedData.message ?? '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name !== 'email' && name !== 'message') {
    return;
  }

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log({
    email: formData.email,
    message: formData.message,
  });

  localStorage.removeItem(STORAGE_KEY);

  formData.email = '';
  formData.message = '';

  form.reset();
});