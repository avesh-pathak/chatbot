import os
from dotenv import load_dotenv

# Load API key from .env file
load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")
