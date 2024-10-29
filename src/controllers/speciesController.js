import Specie from '../models/speciesModels.js';

export const store = async (req, res) => {
    try {
        const specie = await Specie.create(req.body); 

        return res.status(201).json(specie); 
       
    } catch {
       
        return res.status(400).json({ error: 'Falha ao criar o species ' });
    }
};

export const index = async (req, res) => {
    try {
        const species = await Specie.find().exec();
        return res.status(200).json(species);
    } catch (error) {
        return res.status(400).json({ error: 'Falha ao pesquisar o species' });
    }
};
export const show = async (req, res) => {
    try {
      const content = await Specie.findById(req.params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
export const update = async (req, res) => {
    try {
        const specie = await Specie.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(specie);
    } catch (error) {
        return res.status(400).json({ error: 'Falha ao atualizar o species' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Specie.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Falha ao deletar o species' });
    }
};