ptee-js
=======
JavaScript version of [ptee](https://github.com/sjmulder/ptee).

**ptee** *program* [*argument* ...]

Copies standard input to standard output and a second program,
unlike regular [tee](http://man.openbsd.org/tee) which copies to files.

Installation
------------
    npm install -g @sjmulder/ptee

Examples
--------
Display a fortune cookie and its word count:

    fortune | ptee wc

Display and email build output,
taking care to include standard error:

    make 2>&1 | ptee mail john@example.com

Author
------
Sijmen J. Mulder (ik@sjmulder.nl)
