import pdfkit
from docx import Document

# Load resume data from markdown file
with open("resume/resume.md", "r") as file:
    resume_text = file.read()

# Convert markdown text to HTML
html_content = f"<html><body><pre>{resume_text}</pre></body></html>"

# Generate Academic Resume PDF
pdfkit.from_string(html_content, "resume/academic_resume.pdf")

# Generate Professional Resume DOCX
doc = Document()
doc.add_paragraph(resume_text)
doc.save("resume/professional_resume.docx")

print("Academic and Professional Resumes generated successfully!")
