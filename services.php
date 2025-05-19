<?php
$pageTitle = "Our Services";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?> - ServPro</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: url('background.jpg') no-repeat center center fixed;
            background-size: cover;
        }
        .services-section {
            background-color: rgba(248, 249, 250, 0.9);
            border-radius: 10px;
            padding: 50px;
            margin: 50px auto;
            text-align: center;
            max-width: 900px;
        }
        .services-section h1 {
            color: #0056b3;
            font-weight: bold;
        }
        .service-item {
            margin-top: 30px;
            padding: 20px;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .service-item img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        .service-item h3 {
            color: #0056b3;
        }
    </style>
</head>
<body>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="imgs/logo.png" alt="ServPro Logo" height="80">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.php">About</a></li>
                    <li class="nav-item"><a class="nav-link active" href="services.php">Services</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Products</a>
                        <ul class="dropdown-menu">
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

    <!-- Services Section -->
    <section class="services-section">
        <h1>Our Services</h1>
        <p>We provide top-quality air conditioning services to ensure your home or business stays cool and comfortable.</p>

        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="service-item">
                        <img src="imgs/ac-installation.jpg" alt="AC Installation">
                        <h3>AC Installation</h3>
                        <p>Expert installation of all types of air conditioning systems for residential and commercial spaces.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-item">
                        <img src="imgs/maintenance.jpg" alt="Maintenance">
                        <h3>Maintenance</h3>
                        <p>Regular maintenance to keep your AC running efficiently and extend its lifespan.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="service-item">
                        <img src="imgs/repair.jpg" alt="Repairs">
                        <h3>Repairs</h3>
                        <p>Fast and reliable repairs to fix any issues and restore your AC’s performance.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
