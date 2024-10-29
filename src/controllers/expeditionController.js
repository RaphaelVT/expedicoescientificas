import Expedition from '../models/expeditionModels.js';

export const store = async (req, res) => {
    try {
        const expedition = await Expedition.create(req.body); 

        return res.status(201).json(expedition); 
       
    } catch {
       
        return res.status(400).json({ error: 'Falha ao criar o expedition ' });
    }
};

export const index = async (req, res) => {
    try {
        const expedition = await Expedition.find().exec();
        return res.status(200).json(expedition);
    } catch (error) {
        return res.status(400).json({ error: 'Falha ao pesquisar o expedition' });
    }
};

export const show = async (req, res) => {
    try {
      const content = await Expedition.findById(req.params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };

export const update = async (req, res) => {
    try {
        const expedition = await Expedition.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(expedition);
    } catch (error) {
        return res.status(400).json({ error: 'Falha ao atualizar o expedition' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Expedition.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Falha ao deletar o expedition' });
    }
};