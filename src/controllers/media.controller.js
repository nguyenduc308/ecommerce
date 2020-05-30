const  { Media } = require('../models/Media.model');
const fs = require('fs');
const path = require('path');

module.exports.upload = async(req, res) => {

    const typesMustMatch = ['image/jpeg', 'image/jpeg']
    if(!typesMustMatch.includes(req.file.mimetype)) {
        return res.status(400).json({error: "The type of file does not support !"})
    }
    const mediaPath = `media/images/others/${req.file.filename}`;
    const [mediaType] = req.file.mimetype.split('/');
    try {
        const newMedia = new Media({
            mediaType,
            fileName: req.file.filename,
            postBy: req.user.id,
            url: mediaPath,
            format: req.file.mimetype,
            
        });
        const media = await newMedia.save()
        return res.status(201).json({
            message: "Uploaded",
            media: media
        })
    } catch (err) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}

module.exports.deleteMedia = async (req, res) => {
    const { id } = req.params;
    try {
        const media = await Media.findById(id);
        if(!media) return res.status(404).json({error: `File from ID ${id} not found`});

        const { url } = media;
        const realPath = ['uploads',...url.split('/').splice(1)].join('/')

        await Media.deleteOne({_id: id})
        await fs.unlinkSync(path.join(__dirname,'..', realPath))
        res.status(200).json({
            message: "`File from ID ${id} has been deleted`" 
        })
    } catch (error) {
        return res.status(500).json({
            error: "Have something error when deleting"
        })
    }
}

module.exports.getAllMedia = async (req, res) => {
    try {
        const media = await Media.find();
        return res.status(200).json(media)
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}

module.exports.getMedia = async (req, res) => {
    const { id } = req.params
    try {
        const media = await Media.findById(id);
        return res.status(200).json(media)
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}

