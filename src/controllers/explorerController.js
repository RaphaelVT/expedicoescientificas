import Explorer from '../models/explorerModels.js';

export const store = async (req, res) => {
    try {
        const explorer = await Explorer.create(req.body); 

        return res.status(201).json(explorer); 
       
    } catch {
       
        return res.status(400).json({ error: 'Falha ao criar o explorer ' });
    }
};

export const index = async (req, res) => {
    try {
        const explorer = await Explorer.find().exec();
        return res.status(200).json(explorer);
    } catch (error) {
        return res.status(400).json({ error: 'Falha ao pesquisar o explorer' });
    }
};
export const show = async (req, res) => {
    try {
      const content = await Explorer.findById(req.params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };

export const update = async (req, res) => {
    try {
        const explorer = await Explorer.findByIdAndUpdate(req.params.id, req.body,).exec();
        return res.status(200).json(explorer);
    } catch (error) {
        return res.status(400).json({ error: 'Falha ao atualizar o explorer' });
    }
};

export const destroy = async (req, res) => {
    try {
        await Explorer.findByIdAndDelete(req.params.id).exec();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: 'Falha ao deletar o explorer' });
    }
};