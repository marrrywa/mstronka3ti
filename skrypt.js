let titleText = "DZIEJE POLSKIEJ MUZYKI";
function scrollTitle() {
        document.title = titleText;
        titleText = titleText.substring(1) + titleText.substring(0, 1);
        setTimeout(scrollTitle, 250);
}
scrollTitle();

const cytaty = [
        "„Ważne są tylko te dni, których jeszcze nie znamy...” – Marek Grechuta",
        "„Nic nie może przecież wiecznie trwać...” – Anna Jantar",
        "„A po nocy przychodzi dzień...” – Budka Suflera",
        "„Noś długie włosy jak my...” – Elektryczne Gitary",
        "„Ile jestem ci winien...” – Happysad",
        "„Ale wkoło jest wesoło...” – Perfect",
        "„Kiedyś byłam różą dla twojego serca...” – Kayah & Bregović",
        "„Zawsze tam gdzie ty...” – Lady Pank"
];
function losujCytat() {
        const poleTekstowe = document.getElementById('cytatKontener');
        if (poleTekstowe) {
            const losowyIndeks = Math.floor(Math.random() * cytaty.length);
            poleTekstowe.innerHTML = `<strong>Cytat na dziś:</strong><br><br><span style="color: #67e8f9; font-weight: bold;">${cytaty[losowyIndeks]}</span>`;
    }
}
losujCytat();
