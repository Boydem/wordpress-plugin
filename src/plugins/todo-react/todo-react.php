<?php
/*
Plugin Name:  todo-react
Description:  Todo app using react tutorial
Version:      1.0
Author:       noyem 
License:      GPL
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  todo-react
*/

class Todo
{
    private static $instance = null;

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new Todo();
        }
        return self::$instance;
    }

    public function __construct()
    {
        add_action('admin_menu', [$this, 'todo_admin_menu_init']);
        add_action('admin_enqueue_scripts', [$this, 'todo_include_scripts']);
    }
    public function todo_admin_menu_init()
    {
        add_menu_page(
            __('Todo list', 'todo-react'),
            __('Todos', 'todo-react'),
            'manage_options',
            'todo-list',
            [$this, 'todo_admin_page'],
            'dashicons-list-view',
            '2'
        );
    }
    public function todo_admin_page()
    {
        require_once plugin_dir_path(__FILE__) . 'templates/app.php';
    }

    public function todo_include_scripts()
    {
        wp_enqueue_style(
            'todo-react-style',
            plugin_dir_url(__FILE__) . 'build/index.css'
        );

        wp_enqueue_script(
            'todo-react-script',
            plugin_dir_url(__FILE__) . 'build/index.js',
            ['wp-element'],
            '1.0.0',
            true
        );
    }
}

$todo = Todo::getInstance();