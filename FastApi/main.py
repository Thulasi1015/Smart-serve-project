from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

# Initialize FastAPI app
app = FastAPI()

# Mount the static directory (for CSS, images, JS, etc.)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Point FastAPI to the templates directory (for HTML files)
templates = Jinja2Templates(directory="templates")

# Route for the homepage
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    # Pass the list of menu items to the HTML template
    items = ["Juices", "Ice-Cream", "Cake", "Meals", "Rice", "Salad", "Tea/Coffee", "Pizza"]
    return templates.TemplateResponse("index.html", {"request": request, "items": items})
