import * as data from '../models/data.js';

// =================== get the whole data =======================
export const getAllJournalists = (req,res) => {
    res.json(data.getJournalists());
}

export const getAllCategories = (req, res) => {
    res.json(data.getCategories());
}

export const getAllArticles = (req, res) => {
    res.json(data.getArticles());
}

// ===================== get data by id ========================
export const getJournalist = (req, res) => {
    const journalist = data.getJournalistById(parseInt(req.param.id));
    if (!journalist) return res.status(404).json({error: 'jounalist not found'});
    res.json(journalist);
}

export const getCategory = (req, res) => {
    const category = data.getCategoriesById(parseInt(req.param.id));
    if (!category) return res.status(404).json({error: 'category not found'});
    res.json(category);
}

export const getArticle = (req, res) => {
    const article = data.getArticlesById(parseInt(req.param.id));
    if (!article) return res.status(404).json({error: 'article not found'});
    res.json(article);
}

// ===================== create function ========================
export const createJournalist = (req, res) => {
    const {name, email} = req.body;
    if (!name || !email) return res.status(400).json({error: 'Name and Email are required'});
    const newJournalist = data.createJournalist(name, email);
    res.status(201).json(newJournalist);
}

export const createCategory = (req, res) => {
    const {name} = req.body;
    if (!name) return res.status(400).json({error: 'Name is required!'});
    const newCategory = data.createCategory(name);
    res.status(201).json(newCategory);
}

export const createArticle = (req, res) => {
    const {title, content, journalistId, categoryId} = req.body;
    if (!title) return res.status(400).json({error: 'Title is required'});
    if (!content) return res.status(400).json({error: 'Content is required'});
    if (!journalistId || !categoryId) return res.status(400).json({error: 'ID of journalist and category are required'});
    const newArticle = data.createArticle(title, content, journalistId, categoryId);
    res.status(201).json(newArticle);
}