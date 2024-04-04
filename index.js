const express = require('express')
const app = express() 

app.get('/', (req, res) => {
    return res.send('Yessssssssss')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`We live on port ${PORT}`);
})
