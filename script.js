document.addEventListener('DOMContentLoaded', () => {
    const portfolioForm = document.getElementById('portfolioForm');

    portfolioForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Collect all form data
        const formData = new FormData(portfolioForm);

        const portfolioData = {
            name: formData.get('name'),
            email: formData.get('email'),
            bio: formData.get('bio'),
            major: formData.get('major'),
            gpa: formData.get('gpa'),
            courses: formData.get('courses'),
            projectTitle: formData.get('projectTitle'),
            projectDescription: formData.get('projectDescription'),
            skills: formData.get('skills'),
            experience: formData.get('experience'),
            linkedin: formData.get('linkedin'),
            github: formData.get('github'),
            twitter: formData.get('twitter'),
            colorScheme: formData.get('colorScheme'),
            font: formData.get('font')
        };

        // Generate portfolio preview
        generatePortfolioPreview(portfolioData);
    });

    function generatePortfolioPreview(data) {
        const previewWindow = window.open('', '_blank');

        previewWindow.document.write(`
            <html>
            <head>
                <title>${data.name}'s Portfolio</title>
                <style>
                    body {
                        font-family: ${data.font}, sans-serif;
                        background-color: ${data.colorScheme};
                        color: #333;
                        margin: 0;
                        padding: 2rem;
                        animation: fadeIn 1s ease-in-out;
                    }
                    header {
                        text-align: center;
                        margin-bottom: 2rem;
                        animation: slideInDown 1s ease-in-out;
                    }
                    header h1 {
                        font-size: 2.5rem;
                        margin: 0;
                    }
                    header p {
                        font-size: 1.2rem;
                        color: #555;
                    }
                    section {
                        margin-bottom: 2rem;
                        animation: fadeInUp 1.2s ease-in-out;
                    }
                    section h2 {
                        color: #6200ea;
                        border-bottom: 2px solid #6200ea;
                        display: inline-block;
                        margin-bottom: 1rem;
                    }
                    section p {
                        margin: 0.5rem 0;
                        line-height: 1.6;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>${data.name}</h1>
                    <p>${data.bio}</p>
                </header>

                <section>
                    <h2>Academic Details</h2>
                    <p><strong>Major:</strong> ${data.major}</p>
                    <p><strong>GPA:</strong> ${data.gpa || 'N/A'}</p>
                    <p><strong>Relevant Courses:</strong> ${data.courses || 'N/A'}</p>
                </section>

                <section>
                    <h2>Project Details</h2>
                    <p><strong>Title:</strong> ${data.projectTitle}</p>
                    <p>${data.projectDescription}</p>
                </section>

                <section>
                    <h2>Skills and Experience</h2>
                    <p><strong>Skills:</strong> ${data.skills}</p>
                    <p><strong>Experience:</strong> ${data.experience || 'N/A'}</p>
                </section>

                <section>
                    <h2>Social Media</h2>
                    <p><strong>LinkedIn:</strong> <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>
                    <p><strong>GitHub:</strong> <a href="${data.github}" target="_blank">${data.github}</a></p>
                    <p><strong>Twitter:</strong> <a href="${data.twitter}" target="_blank">${data.twitter}</a></p>
                </section>
            </body>
            </html>
        `);

        previewWindow.document.close();
    }

    // Add smooth scroll to form sections
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});