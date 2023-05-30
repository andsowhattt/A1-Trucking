export function sendMessage() {
	const form = document.getElementById('contacts__sms-form');
	const nameInput = document.getElementById('contacts__sms-name');
	const emailInput = document.getElementById('contacts__sms-email');
	const messageInput = document.getElementById('contacts__sms-message');

	const name = nameInput.value;
	const email = emailInput.value;
	const message = messageInput.value;

	const formData = new FormData();
	formData.append('name', name);
	formData.append('email', email);
	formData.append('message', message);

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: formData
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Error: ' + response.status);
			}
			return response.json();
		})
		.then(data => {
			console.log('Message sent successfully:', data);

			form.reset();

			const formDataObject = {
				name,
				email,
				message,
			};

			alert(JSON.stringify(formDataObject));
			alert('Message sent successfully');
		})
		.catch(error => {
			console.error('Error:', error);
		});
}
