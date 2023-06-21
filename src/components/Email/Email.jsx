


const openEmailWindow = () => {
    const email = 'your-email@example.com';
    const subject = 'Example Subject';
    const body = 'Example message body';
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const linkElement = document.createElement('a');
    linkElement.href = mailtoLink;
    linkElement.click();
  };
  