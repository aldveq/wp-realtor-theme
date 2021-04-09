<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Shepard_Realtors
 */
$footer_copyright_text = get_theme_mod( '_shepard_realtors_footer_info', '' );
?>

	<footer id="colophon" class="site-footer">
		<div class="container">
			<?php
				if(!empty($footer_copyright_text)):
					?>
						<h6><?php echo esc_html( $footer_copyright_text ); ?></h6>
					<?php
				endif;
			?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
