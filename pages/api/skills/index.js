const {skills} = require('./skills.json')
export default function handler(req, res) {
  if(req.method === 'GET'){
    res.status(200).json(skills)
  }else{
    res.setHeader('Allow',['GET'])
    res.status(405).json({message:`Methos ${req.method} is not allowed`})
  }
}
