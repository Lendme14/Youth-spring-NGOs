// Load the header and footer dynamically
window.onload = function() {
    document.getElementById("header").innerHTML = `
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="logo.png" alt="Youth Spring Logo" height="50px"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#programs">Programs</a></li>
                        <li class="nav-item"><a class="nav-link" href="#register">Apply for Loan</a></li>
                        <li class="nav-item"><a class="nav-link btn btn-donate" href="#donate">Donate</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    document.getElementById("footer").innerHTML = `
        <footer class="footer">
            <div class="container">
                <p>&copy; 2025 Youth Spring. All Rights Reserved.</p>
                <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
            </div>
        </footer>
    `;
}
