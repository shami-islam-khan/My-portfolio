function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shamikhan4983@gmail.com",
        Password : "9D30ADF8B70A562196EA497CA72373A27342",
        To : 'shamiislamkhanshami@gmail.com',
        From : "shamikhan4983@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("Email was sent")
    );
}