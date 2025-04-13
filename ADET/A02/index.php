<?php

$page = "info";

if (isset($_GET['page'])) {
  $page = $_GET['page'];
  switch ($page) {
    case "info":
    case "tripitropi":
    case "tralalerotralala":
    case "cappucinoassassino":
    case "brrbrrpatapim":
    case "bombardiro":
    case "bombinigosini":
    case "lirili":
    case "tungtung":
      break;
    default:
      header("Location: ?page=info");
      exit();
  }
} else {
  header("Location: ?page=info");
  exit();
}

?>


<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Italian Brainrot Wiki</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
  <link rel="icon" type="image" href="img/logo.png">
  <link rel="stylesheet" href="css/style.css">

</head>

<body class="bg-dark">


  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow text-color">
    <div class="container-fluid">
      <a class="navbar-brand text-color" href="?page=#">Italian Brainrot Wiki</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav text-light ms-auto">
          <a class="nav-link text-color" aria-current="page" href="../index.html">Return</a>
        </div>
      </div>
    </div>
  </nav>


  <div class="container-fluid">
    <div class="row scrollbar-style">

      <div class="col-12 col-sm-12 col-md-12 col-lg-3">
        <div class="bg-dark card rounded-3 my-4 scrollbar-style"
          style="height: 50vh; max-height: 50vh; overflow-y: scroll;">
          <div class="col">
            <p class="display-6 text-center title-color my-3">Contents</p>

            <hr class="text-light">

            <ul class="content flex-column text-light mx-3">
              <li class="content-item">
                <a href="?page=bombardiro" class="nav-link text-color my-1">Bombardiro Crocodilo</a>
              </li>
              <li class="content-item">
                <a href="?page=bombinigosini" class="nav-link text-color my-1">Bombombini Gusini</a>
              </li>
              <li class="content-item">
                <a href="?page=brrbrrpatapim" class="nav-link text-color my-1">Brr Brr Patapim</a>
              </li>
              <li class="content-item">
                <a href="?page=cappucinoassassino" class="nav-link text-color my-1">Cappuccino Assassino</a>
              </li>
              <li class="content-item">
                <a href="?page=lirili" class="nav-link text-color my-1">Lirili Larila</a>
              </li>
              <li class="content-item">
                <a href="?page=tralalerotralala" class="nav-link text-color my-1">Tralalero Tralala</a>
              </li>
              <li class="content-item">
                <a href="?page=tripitropi" class="nav-link text-color my-1">Tripi Tropi</a>
              </li>
              <li class="content-item">
                <a href="?page=tungtung" class="nav-link text-color my-1">Tung Tung Tung Tung Tung Tung Tung Tung Tung
                  Sahur</a>
              </li>

          </div>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
        <div class="bg-dark card rounded-3 my-3" style="height: 89vh; max-height: 89vh; overflow-y: scroll;">

          <?php include("shared/" . $page . ".php"); ?>

        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-12 col-lg-3">
        <div class="bg-dark card rounded-3 my-4" style="max-height: 90vh;">
          <p class="display-6 text-center title-color my-3">Context Video</p>
          <iframe class="my-3" width="auto" height="300"
            src="https://www.youtube-nocookie.com/embed/a4ixBy2ylWo?si=Nx-sZa6syzDgrEaO&autoplay=1&mute=1"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
      </div>

    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
    crossorigin="anonymous"></script>
</body>

</html>