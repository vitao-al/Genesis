import os
import sys

# Adiciona o diretório raiz ao sys.path para garantir importações relativas
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if root_dir not in sys.path:
    sys.path.insert(0, root_dir)

from app import app

# Exporta o app para o runtime serverless do Vercel
app = app
