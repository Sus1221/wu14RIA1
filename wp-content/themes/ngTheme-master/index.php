<!DOCTYPE html>
<html>
<head>
  <!-- base href must correspond to the base path of your wordpress site -->
  <base href="/wu14RIA1/">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  
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