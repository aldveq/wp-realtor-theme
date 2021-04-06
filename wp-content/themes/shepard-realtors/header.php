<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Shepard_Realtors
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'shepard-realtors' ); ?></a>

	<header id="masthead" class="site-header shepard-realtors-header">
		<div class="container">
			<div class="shepard-realtors-header__logo-container">
				<a href="#" class="shepard-realtors-header__logo-link">
					<img src="<?php echo get_template_directory_uri(); ?>/images/shepard-realtors-logo.svg" class="shepard-realtors-header__logo" alt="Shepard Realtors Logo">
				</a>				
				<button class="button button__hamburguer" id="hamburguerMenuButton"></button>
				<a href="tel:(540) 376-8323" class="shepard-realtors-header__cta-link"><h6>Call now! <span class="shepard-realtors-header__cta-number">(540) 376-8323</span></h6></a>
			</div>
			<nav class="shepard-realtors-header__nav-container">
				<?php
					wp_nav_menu(array(
						'menu' => '',
						'container' => false,
						'container_class' => '',
						'theme_location' => 'main-menu',
						'depth'	=> 0,
						'menu_class' => 'shepard-realtors-header__nav-list',
					));
				?>
				<a href="tel:(540) 376-8323" class="shepard-realtors-header__cta-link shepard-realtors-header__cta-link--desktop"><h6>Call now! <span class="shepard-realtors-header__cta-number">(540) 376-8323</span></h6></a>
			</nav>
		</div>		
	</header><!-- #masthead -->
