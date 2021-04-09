<?php

function _shepard_realtors_customize_register( $wp_customize ) {

    // Footer Settings

    $wp_customize->add_section('_shepard_realtors_footer_options', array(
        'title' => esc_html__('Footer Options', '_themename'),
        'description' => esc_html__( 'You can change footer options from here.', '_themename' )
    ));
    
    $wp_customize->add_setting('_shepard_realtors_footer_info', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field'
    ));

    $wp_customize->add_control('_shepard_realtors_footer_info', array(
        'type' => 'text',
        'label' => esc_html__( 'Copyright', 'Shepard Realtors' ),
        'section' => '_shepard_realtors_footer_options'
    ));

    // Header Settings

    $wp_customize->add_section('_shepard_realtors_header_options', array(
        'title' => esc_html__('Header Options', '_themename'),
        'description' => esc_html__( 'You can change header options from here.', '_themename' )
    ));
    
    $wp_customize->add_setting('_shepard_realtors_header_cta_text_info', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field'
    ));

    $wp_customize->add_control('_shepard_realtors_header_cta_text_info', array(
        'type' => 'text',
        'label' => esc_html__( 'CTA Text', 'Shepard Realtors' ),
        'section' => '_shepard_realtors_header_options'
    ));

    $wp_customize->add_setting('_shepard_realtors_header_phone_number_info', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field'
    ));

    $wp_customize->add_control('_shepard_realtors_header_phone_number_info', array(
        'type' => 'text',
        'label' => esc_html__( 'Phone Number', 'Shepard Realtors' ),
        'section' => '_shepard_realtors_header_options'
    ));
}
add_action('customize_register', '_shepard_realtors_customize_register');