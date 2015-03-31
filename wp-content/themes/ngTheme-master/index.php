<!DOCTYPE html>
<html>
<head>
  <!-- base href must correspond to the base path of your wordpress site -->
  <base href="/wu14RIA1/">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="style.css">
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.js"></script>
  <script src="app.js"></script>
  <script src="controllers.js"></script>

  
  <title>Sellforce</title>
  <?php wp_head(); ?>
</head>
<body ng-app="ngTheme">
  <header ng-include="'<?php echo(THEME_HTTP_ROOT)?>partials/header.html'">
  </header>
 
  <main ng-view>

  </main>
 
  <footer ng-include="'<?php echo(THEME_HTTP_ROOT)?>partials/footer.html'">
  </footer>
 
</body>
</html>