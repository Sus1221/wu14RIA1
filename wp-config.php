<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wu14RIA1');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'mysql');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '|~ox4Hlhn+b=b`(k2B@l>Cq8b}_v|BzvUrky URg0wN@df?T#5Rk|.8Ef=j24db+');
define('SECURE_AUTH_KEY',  '8ArZ,,()Q@OAwUV4 8U-?5+W{VVDHwEHy#+m8Fx y~7UR2w-O}Ee{foNsBO`$<RC');
define('LOGGED_IN_KEY',    'FO^(+$dkd;K$K,qdv<w4,9eZObMj&P(i8#GC;U|IO$87aqYuhCdO}|S3%Cw]?q$~');
define('NONCE_KEY',        '9/5CT!|_i~XN8AXu9d1NPY8RWpt8b=$2SEH+u,:XsAg0~8|%zyA%6rN+TW|(r-D3');
define('AUTH_SALT',        '#/XZ+9za!-:me>y*ZZGJVoCGY-{!L1UfaAaOW38|bx +gLto~.TMWonNY5t+|*cP');
define('SECURE_AUTH_SALT', 'a^ _>WO(-p_*ovS9GVL^gX5A|*A8sG;!:Me`s|=E*cBp01}Qx,-W`9{~!Rl8=%sL');
define('LOGGED_IN_SALT',   '6UV?T2wZN^7{%+VpA-H^l<9RI<s8=%Zc^Qdw99K9Bdb:-f(fYI(M}SC1}nAj2i2N');
define('NONCE_SALT',       '*+M-*-4#@TB$<+b|xyqpY}cLn!H/^|gFfNy<P`sj(U|V)0o+/hTmVV.o)D|9>Vz3');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
