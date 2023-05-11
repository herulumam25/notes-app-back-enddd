// buat objek skema 
const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.number().min(6).required(),
});

const validasi = schema.validate ({
    username : 'herll',
    password: 333
});

if(validasi.error) {
    console.log(`validas error : ${validasi.error.message}`)
} else {
    console.log('valdasi berhasil')
}