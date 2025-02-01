document.addEventListener('DOMContentLoaded', function() {
    // Toggle sections visibility
    const sections = document.querySelectorAll('.schedule, .exam-week');
    sections.forEach(section => {
        const header = section.querySelector('h2');
        header.addEventListener('click', function() {
            const table = section.querySelector('table');
            table.style.display = table.style.display === 'none' ? 'table' : 'none';
        });
    });

    // Add notifications for upcoming exams
    const examDates = [
        { date: '2025-02-10', message: 'Examen de Biologie cellulaire et Initiation au traitement de texte aujourd\'hui!' },
        { date: '2025-02-11', message: 'Examen d\'Histologie et d\'Electrocinétique aujourd\'hui!' },
        { date: '2025-02-12', message: 'Examen de Parasitologie et de Thermodynamique clinique aujourd\'hui!' },
        { date: '2025-02-13', message: 'Examen de Physiologie et d\'Entomologie aujourd\'hui!' },
        { date: '2025-02-14', message: 'Examen de Biophysique Générale et de Thermodynamique clinique aujourd\'hui!' },
        { date: '2025-02-15', message: 'Examen de Biophysique Générale aujourd\'hui! Bonne chance!' }
    ];

    const checkExams = () => {
        const today = new Date().toISOString().split('T')[0];
        const examToday = examDates.find(exam => exam.date === today);
        if (examToday) {
            alert(examToday.message);
        }
    };

    checkExams();
});