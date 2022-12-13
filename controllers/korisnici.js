const bcrypt = require('bcrypt')
const korisniciRouter = require('express').Router()
const Korisnik = require('../models/korisnik')

korisniciRouter.get('/', async (req, res) => {
    const korisnici = await Korisnik.find({}).populate('poruke', {sadrzaj: 1, datum: 1})
    res.json(korisnici)
  })

korisniciRouter.post('/', async (req, res) => {
    const sadrzaj = req.body

    const runde = 10
    const passHash = await bcrypt.hash(sadrzaj.pass, runde)

    const korisnik = new Korisnik({
        username: sadrzaj.username,
        ime: sadrzaj.ime,
        passHash: passHash
    })

    const noviKorisnik = await korisnik.save()
    res.json(noviKorisnik)
})

module.exports = korisniciRouter