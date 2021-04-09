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
$header_cta_text = get_theme_mod( '_shepard_realtors_header_cta_text_info', '' );
$header_phone_number_text = get_theme_mod( '_shepard_realtors_header_phone_number_info', '' );

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
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="shepard-realtors-header__logo-link">
					<?php 
						$custom_logo_id = get_theme_mod( 'custom_logo' );
						$custom_logo_url = wp_get_attachment_image_url( $custom_logo_id , 'full' );		
						$custom_logo_alt = get_post_meta($custom_logo_id, '_wp_attachment_image_alt', TRUE);
					?>
					<img src="<?php echo $custom_logo_url; ?>" class="shepard-realtors-header__logo" alt="<?php echo $custom_logo_alt; ?>">
				</a>				
				<button class="button button__hamburguer" id="hamburguerMenuButton"></button>
				<?php
					if(!empty($header_cta_text) && !empty($header_phone_number_text)):
						?>
							<a href="tel:<?php echo esc_html($header_phone_number_text); ?>" class="shepard-realtors-header__cta-link"><h6><?php echo esc_html($header_cta_text); ?> <span class="shepard-realtors-header__cta-number"><?php echo esc_html($header_phone_number_text); ?></span></h6></a>
						<?php
					endif;
				?>
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
				<?php
					if(!empty($header_cta_text) && !empty($header_phone_number_text)):
						?>
							<a href="tel:<?php echo esc_html($header_phone_number_text); ?>" class="shepard-realtors-header__cta-link shepard-realtors-header__cta-link--desktop"><h6><?php echo esc_html($header_cta_text); ?> <span class="shepard-realtors-header__cta-number"><?php echo esc_html($header_phone_number_text); ?></span></h6></a>
						<?php
					endif;
				?>
			</nav>
		</div>		
	</header><!-- #masthead -->
