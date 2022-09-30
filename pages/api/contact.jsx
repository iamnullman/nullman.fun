export default async (req, res) => {
    if(req.method !== 'POST') return res.json({
        success: false,
        message: 'Invalid method.'
    });
    let { email, content } = req.body;
    let _ =  await fetch("https://discord.com/api/webhooks/1025167736357277707/zpVouzt6E18vhRvOyRBXEa9DFn0vQ7tQRK5XWba35bOuVmihDq-ZxQ6qrqYgz_l7Ibhn", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'NullMan | Contact Form',
          attachments: [],
          embeds: [
            {
              title: 'Contact',
              type: "rich",
              color: 5193214,
              fields: [
                {
                  name: 'Email',
                  value: email || 'N/A'
                },
                {
                  name: 'Content',
                  value: content || 'N/A'
                }
              ]
            }
          ]
        })
    });

    try {
        res.send(_)
    } catch {
        res.status(500);
    }
}