<?php
$pageTitle = "About Us";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?> - ServPro</title>
    
    <!-- Bootstrap & CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

    <style>
        body {
            font-family: Arial, sans-serif;
            background: url('background.jpg') no-repeat center center fixed;
            background-size: cover;
        }
        .about-section {
            background-color: rgba(248, 249, 250, 0.9);
            border-radius: 10px;
            padding: 50px;
            margin: 50px auto;
            text-align: center;
            max-width: 800px;
        }
        .about-section h1 {
            color: #0056b3;
            font-weight: bold;
        }
        .about-section p {
            font-size: 18px;
            color: #333;
        }
        .about-image {
            width: 100%;
            max-width: 500px;
            border-radius: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container-fluid"> <!-- Changed from container to container-fluid -->
            <a class="navbar-brand" href="index.html">
                <img src="imgs/logo.png" alt="ServPro Logo" height="80">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link active" href="about.php">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Book A Service</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                        <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                            <li><a class="dropdown-item" href="#">AC Installation</a></li>
                            <li><a class="dropdown-item" href="#">Maintenance</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                        <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                            <li><a class="dropdown-item" href="#">AC Units</a></li>
                            <li><a class="dropdown-item" href="#">Parts</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-contact btn-warning" href="#">Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- About Section -->
    <section class="about-section">
        <h1>About ServPro</h1>
        <p>ServPro is a trusted provider of air conditioning services, including installation, maintenance, and repairs. Our team of skilled professionals ensures your home or business stays cool and comfortable year-round.</p>
        <img src="imgs/team.jpg" alt="Our Team" class="about-image">
        <p>With years of experience, we pride ourselves on customer satisfaction, expert solutions, and a commitment to excellence.</p>
    </section>

    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
