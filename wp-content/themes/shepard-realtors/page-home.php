<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Shepard_Realtors
 */

get_header();
?>

    <section class="brand-section">
        <div class="container container-separation-y">
            <img src="<?php echo get_template_directory_uri(); ?>/images/shepard-realtors-logo.svg" alt="Elizabeth Shephard Realtors">
            <h6>Elizabeth Shephard Realtors</h6>
        </div>
    </section>

    <section class="hero-image-section">
        <div class="container container-separation-y">
            <h5>Find your perfect lakeside retreat, today!</h5>
            <p>Life On The Water - With Elizabeth Shepard</p>
        </div>
    </section>

<?php
get_footer();