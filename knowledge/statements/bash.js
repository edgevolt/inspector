// Bash Knowledge Base - Bourne Again Shell

export const bashKnowledge = {
    // Built-in Commands
    builtins: {
        'echo': {
            type: 'builtin',
            description: 'Display a line of text',
            category: 'Output',
            syntax: 'echo [options] [string...]',
            details: 'Outputs the given strings separated by spaces and followed by a newline. Use -n to suppress newline, -e to enable escape sequences.',
            example: 'echo "Hello, World!"',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-echo'
        },
        'cd': {
            type: 'builtin',
            description: 'Change the current directory',
            category: 'Navigation',
            syntax: 'cd [directory]',
            details: 'Changes the current working directory. Use cd - to return to previous directory, cd ~ or cd to go to home directory.',
            example: 'cd /var/log',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-cd'
        },
        'pwd': {
            type: 'builtin',
            description: 'Print working directory',
            category: 'Navigation',
            syntax: 'pwd [-LP]',
            details: 'Prints the absolute pathname of the current working directory. -L prints logical path, -P prints physical path.',
            example: 'pwd',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-pwd'
        },
        'export': {
            type: 'builtin',
            description: 'Set environment variable',
            category: 'Variables',
            syntax: 'export [name[=value]...]',
            details: 'Marks variables for export to child processes. Makes variables available to subshells and executed programs.',
            example: 'export PATH=$PATH:/usr/local/bin',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-export'
        },
        'read': {
            type: 'builtin',
            description: 'Read input into variables',
            category: 'Input',
            syntax: 'read [options] [name...]',
            details: 'Reads a line from standard input and splits it into fields. Use -p for prompt, -r to disable backslash escaping.',
            example: 'read -p "Enter name: " username',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-read'
        },
        'source': {
            type: 'builtin',
            description: 'Execute commands from file',
            category: 'Execution',
            syntax: 'source filename [arguments]',
            details: 'Reads and executes commands from filename in the current shell environment. Also available as "." (dot).',
            example: 'source ~/.bashrc',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-source'
        },
        'alias': {
            type: 'builtin',
            description: 'Create command alias',
            category: 'Aliases',
            syntax: 'alias [name[=value]...]',
            details: 'Creates a shortcut for a command. Without arguments, lists all aliases.',
            example: 'alias ll="ls -la"',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-alias'
        },
        'unalias': {
            type: 'builtin',
            description: 'Remove alias',
            category: 'Aliases',
            syntax: 'unalias name',
            details: 'Removes the specified alias definition.',
            example: 'unalias ll',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-unalias'
        },
        'exit': {
            type: 'builtin',
            description: 'Exit the shell',
            category: 'Control',
            syntax: 'exit [n]',
            details: 'Exits the shell with status n. If n is omitted, exit status is that of the last command.',
            example: 'exit 0',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-exit'
        },
        'return': {
            type: 'builtin',
            description: 'Return from function',
            category: 'Control',
            syntax: 'return [n]',
            details: 'Exits a function with return value n. If n is omitted, return status is that of the last command.',
            example: 'return 1',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-return'
        },
        'set': {
            type: 'builtin',
            description: 'Set shell options',
            category: 'Configuration',
            syntax: 'set [options] [arguments]',
            details: 'Sets or unsets shell options and positional parameters. Common: set -e (exit on error), set -x (debug mode).',
            example: 'set -euo pipefail',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-set'
        },
        'unset': {
            type: 'builtin',
            description: 'Unset variables or functions',
            category: 'Variables',
            syntax: 'unset [name...]',
            details: 'Removes variables or functions. Use -v for variables, -f for functions.',
            example: 'unset MY_VAR',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-unset'
        },
        'shift': {
            type: 'builtin',
            description: 'Shift positional parameters',
            category: 'Parameters',
            syntax: 'shift [n]',
            details: 'Shifts positional parameters to the left by n (default 1). $2 becomes $1, $3 becomes $2, etc.',
            example: 'shift',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-shift'
        },
        'test': {
            type: 'builtin',
            description: 'Evaluate conditional expression',
            category: 'Testing',
            syntax: 'test expression',
            details: 'Evaluates conditional expressions. Returns 0 (true) or 1 (false). Also available as [ expression ].',
            example: 'test -f /etc/passwd',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-test'
        },
        'printf': {
            type: 'builtin',
            description: 'Format and print data',
            category: 'Output',
            syntax: 'printf format [arguments]',
            details: 'Formats and prints arguments according to format string. More powerful than echo.',
            example: 'printf "%s\\n" "Hello"',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#index-printf'
        }
    },

    // Control Structures
    controlStructures: {
        'if': {
            type: 'keyword',
            description: 'Conditional execution',
            category: 'Control Flow',
            syntax: 'if condition; then commands; fi',
            details: 'Executes commands if condition is true. Can include elif and else clauses.',
            example: 'if [ $? -eq 0 ]; then echo "Success"; fi',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs'
        },
        'then': {
            type: 'keyword',
            description: 'Part of if statement',
            category: 'Control Flow',
            syntax: 'if condition; then commands',
            details: 'Marks the beginning of commands to execute when if condition is true.',
            example: 'if true; then echo "yes"; fi',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs'
        },
        'else': {
            type: 'keyword',
            description: 'Alternative branch',
            category: 'Control Flow',
            syntax: 'else commands',
            details: 'Executes commands when if condition is false.',
            example: 'if false; then echo "no"; else echo "yes"; fi',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs'
        },
        'elif': {
            type: 'keyword',
            description: 'Else if condition',
            category: 'Control Flow',
            syntax: 'elif condition; then commands',
            details: 'Tests additional condition if previous conditions were false.',
            example: 'if [ $x -eq 1 ]; then echo "one"; elif [ $x -eq 2 ]; then echo "two"; fi',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs'
        },
        'fi': {
            type: 'keyword',
            description: 'End if statement',
            category: 'Control Flow',
            syntax: 'fi',
            details: 'Closes an if statement.',
            example: 'if true; then echo "yes"; fi',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs'
        },
        'for': {
            type: 'keyword',
            description: 'Loop over items',
            category: 'Loops',
            syntax: 'for var in list; do commands; done',
            details: 'Iterates over a list of items, executing commands for each.',
            example: 'for file in *.txt; do echo $file; done',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Looping-Constructs'
        },
        'while': {
            type: 'keyword',
            description: 'Loop while condition is true',
            category: 'Loops',
            syntax: 'while condition; do commands; done',
            details: 'Executes commands repeatedly while condition is true.',
            example: 'while read line; do echo $line; done < file.txt',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Looping-Constructs'
        },
        'until': {
            type: 'keyword',
            description: 'Loop until condition is true',
            category: 'Loops',
            syntax: 'until condition; do commands; done',
            details: 'Executes commands repeatedly until condition becomes true.',
            example: 'until [ -f /tmp/done ]; do sleep 1; done',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Looping-Constructs'
        },
        'do': {
            type: 'keyword',
            description: 'Begin loop body',
            category: 'Loops',
            syntax: 'do commands',
            details: 'Marks the beginning of commands in a loop.',
            example: 'for i in 1 2 3; do echo $i; done',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Looping-Constructs'
        },
        'done': {
            type: 'keyword',
            description: 'End loop',
            category: 'Loops',
            syntax: 'done',
            details: 'Closes a for, while, or until loop.',
            example: 'for i in 1 2 3; do echo $i; done',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Looping-Constructs'
        },
        'case': {
            type: 'keyword',
            description: 'Pattern matching',
            category: 'Control Flow',
            syntax: 'case word in pattern) commands;; esac',
            details: 'Matches word against patterns and executes corresponding commands.',
            example: 'case $1 in start) echo "Starting";; stop) echo "Stopping";; esac',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs'
        },
        'esac': {
            type: 'keyword',
            description: 'End case statement',
            category: 'Control Flow',
            syntax: 'esac',
            details: 'Closes a case statement.',
            example: 'case $x in 1) echo "one";; esac',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs'
        },
        'in': {
            type: 'keyword',
            description: 'Part of for/case',
            category: 'Control Flow',
            syntax: 'for var in list / case word in',
            details: 'Used in for loops to specify the list, or in case statements before patterns.',
            example: 'for i in 1 2 3; do echo $i; done',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html'
        },
        'function': {
            type: 'keyword',
            description: 'Define function',
            category: 'Functions',
            syntax: 'function name { commands; }',
            details: 'Defines a shell function. Alternative syntax: name() { commands; }',
            example: 'function greet { echo "Hello $1"; }',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Shell-Functions'
        }
    },

    // Common Commands
    commands: {
        'ls': {
            type: 'command',
            description: 'List directory contents',
            category: 'File Operations',
            syntax: 'ls [options] [file...]',
            details: 'Lists files and directories. Common options: -l (long format), -a (all files), -h (human-readable sizes).',
            example: 'ls -lah',
            docUrl: 'https://man7.org/linux/man-pages/man1/ls.1.html'
        },
        'cat': {
            type: 'command',
            description: 'Concatenate and display files',
            category: 'File Operations',
            syntax: 'cat [options] [file...]',
            details: 'Displays file contents. Can concatenate multiple files.',
            example: 'cat file.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/cat.1.html'
        },
        'grep': {
            type: 'command',
            description: 'Search text using patterns',
            category: 'Text Processing',
            syntax: 'grep [options] pattern [file...]',
            details: 'Searches for patterns in files. Common options: -i (ignore case), -r (recursive), -v (invert match).',
            example: 'grep -i "error" logfile.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/grep.1.html'
        },
        'find': {
            type: 'command',
            description: 'Search for files',
            category: 'File Operations',
            syntax: 'find [path...] [expression]',
            details: 'Searches for files in directory hierarchy. Supports complex expressions and actions.',
            example: 'find /var/log -name "*.log" -mtime -7',
            docUrl: 'https://man7.org/linux/man-pages/man1/find.1.html'
        },
        'sed': {
            type: 'command',
            description: 'Stream editor',
            category: 'Text Processing',
            syntax: 'sed [options] script [file...]',
            details: 'Performs text transformations on streams. Powerful for search and replace operations.',
            example: 'sed "s/old/new/g" file.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/sed.1.html'
        },
        'awk': {
            type: 'command',
            description: 'Pattern scanning and processing',
            category: 'Text Processing',
            syntax: 'awk [options] program [file...]',
            details: 'Processes text files, especially useful for column-based data.',
            example: 'awk \'{print $1}\' file.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/awk.1p.html'
        },
        'chmod': {
            type: 'command',
            description: 'Change file permissions',
            category: 'File Operations',
            syntax: 'chmod [options] mode file...',
            details: 'Modifies file access permissions. Use numeric (755) or symbolic (u+x) modes.',
            example: 'chmod 755 script.sh',
            docUrl: 'https://man7.org/linux/man-pages/man1/chmod.1.html'
        },
        'chown': {
            type: 'command',
            description: 'Change file owner',
            category: 'File Operations',
            syntax: 'chown [options] owner[:group] file...',
            details: 'Changes file owner and/or group.',
            example: 'chown user:group file.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/chown.1.html'
        },
        'cp': {
            type: 'command',
            description: 'Copy files and directories',
            category: 'File Operations',
            syntax: 'cp [options] source dest',
            details: 'Copies files or directories. Use -r for recursive copy, -p to preserve attributes.',
            example: 'cp -r /source /dest',
            docUrl: 'https://man7.org/linux/man-pages/man1/cp.1.html'
        },
        'mv': {
            type: 'command',
            description: 'Move or rename files',
            category: 'File Operations',
            syntax: 'mv [options] source dest',
            details: 'Moves or renames files and directories.',
            example: 'mv oldname.txt newname.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/mv.1.html'
        },
        'rm': {
            type: 'command',
            description: 'Remove files or directories',
            category: 'File Operations',
            syntax: 'rm [options] file...',
            details: 'Deletes files or directories. Use -r for recursive, -f to force. Use with caution!',
            example: 'rm -rf /tmp/oldfiles',
            docUrl: 'https://man7.org/linux/man-pages/man1/rm.1.html'
        },
        'mkdir': {
            type: 'command',
            description: 'Create directories',
            category: 'File Operations',
            syntax: 'mkdir [options] directory...',
            details: 'Creates new directories. Use -p to create parent directories as needed.',
            example: 'mkdir -p /path/to/new/dir',
            docUrl: 'https://man7.org/linux/man-pages/man1/mkdir.1.html'
        },
        'rmdir': {
            type: 'command',
            description: 'Remove empty directories',
            category: 'File Operations',
            syntax: 'rmdir [options] directory...',
            details: 'Removes empty directories only.',
            example: 'rmdir /tmp/emptydir',
            docUrl: 'https://man7.org/linux/man-pages/man1/rmdir.1.html'
        },
        'touch': {
            type: 'command',
            description: 'Create file or update timestamp',
            category: 'File Operations',
            syntax: 'touch [options] file...',
            details: 'Creates empty file or updates modification time of existing file.',
            example: 'touch newfile.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/touch.1.html'
        },
        'tar': {
            type: 'command',
            description: 'Archive files',
            category: 'Compression',
            syntax: 'tar [options] [file...]',
            details: 'Creates or extracts tar archives. Common: -czf (create gzip), -xzf (extract gzip).',
            example: 'tar -czf archive.tar.gz /path/to/dir',
            docUrl: 'https://man7.org/linux/man-pages/man1/tar.1.html'
        },
        'gzip': {
            type: 'command',
            description: 'Compress files',
            category: 'Compression',
            syntax: 'gzip [options] [file...]',
            details: 'Compresses files using gzip algorithm. Use gunzip to decompress.',
            example: 'gzip file.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/gzip.1.html'
        },
        'gunzip': {
            type: 'command',
            description: 'Decompress gzip files',
            category: 'Compression',
            syntax: 'gunzip [options] [file...]',
            details: 'Decompresses gzip files.',
            example: 'gunzip file.txt.gz',
            docUrl: 'https://man7.org/linux/man-pages/man1/gzip.1.html'
        },
        'zip': {
            type: 'command',
            description: 'Create zip archives',
            category: 'Compression',
            syntax: 'zip [options] zipfile files...',
            details: 'Creates zip archives. Use -r for recursive.',
            example: 'zip -r archive.zip /path/to/dir',
            docUrl: 'https://linux.die.net/man/1/zip'
        },
        'unzip': {
            type: 'command',
            description: 'Extract zip archives',
            category: 'Compression',
            syntax: 'unzip [options] zipfile',
            details: 'Extracts zip archives.',
            example: 'unzip archive.zip',
            docUrl: 'https://linux.die.net/man/1/unzip'
        },
        'ps': {
            type: 'command',
            description: 'Report process status',
            category: 'Process Management',
            syntax: 'ps [options]',
            details: 'Displays information about running processes. Common: ps aux (all processes).',
            example: 'ps aux | grep nginx',
            docUrl: 'https://man7.org/linux/man-pages/man1/ps.1.html'
        },
        'top': {
            type: 'command',
            description: 'Display running processes',
            category: 'Process Management',
            syntax: 'top [options]',
            details: 'Interactive process viewer showing CPU and memory usage.',
            example: 'top',
            docUrl: 'https://man7.org/linux/man-pages/man1/top.1.html'
        },
        'htop': {
            type: 'command',
            description: 'Interactive process viewer',
            category: 'Process Management',
            syntax: 'htop [options]',
            details: 'Enhanced interactive process viewer with better UI than top.',
            example: 'htop',
            docUrl: 'https://man7.org/linux/man-pages/man1/htop.1.html'
        },
        'kill': {
            type: 'command',
            description: 'Send signal to process',
            category: 'Process Management',
            syntax: 'kill [options] pid...',
            details: 'Sends signal to processes. Default is TERM. Use -9 for KILL signal.',
            example: 'kill -9 1234',
            docUrl: 'https://man7.org/linux/man-pages/man1/kill.1.html'
        },
        'killall': {
            type: 'command',
            description: 'Kill processes by name',
            category: 'Process Management',
            syntax: 'killall [options] name...',
            details: 'Kills all processes with the specified name.',
            example: 'killall nginx',
            docUrl: 'https://man7.org/linux/man-pages/man1/killall.1.html'
        },
        'df': {
            type: 'command',
            description: 'Report disk space usage',
            category: 'System Info',
            syntax: 'df [options] [file...]',
            details: 'Shows disk space usage of filesystems. Use -h for human-readable format.',
            example: 'df -h',
            docUrl: 'https://man7.org/linux/man-pages/man1/df.1.html'
        },
        'du': {
            type: 'command',
            description: 'Estimate file space usage',
            category: 'System Info',
            syntax: 'du [options] [file...]',
            details: 'Shows disk usage of files and directories. Use -h for human-readable, -s for summary.',
            example: 'du -sh /var/log',
            docUrl: 'https://man7.org/linux/man-pages/man1/du.1.html'
        },
        'free': {
            type: 'command',
            description: 'Display memory usage',
            category: 'System Info',
            syntax: 'free [options]',
            details: 'Shows amount of free and used memory. Use -h for human-readable format.',
            example: 'free -h',
            docUrl: 'https://man7.org/linux/man-pages/man1/free.1.html'
        },
        'uname': {
            type: 'command',
            description: 'Print system information',
            category: 'System Info',
            syntax: 'uname [options]',
            details: 'Displays system information. Use -a for all information.',
            example: 'uname -a',
            docUrl: 'https://man7.org/linux/man-pages/man1/uname.1.html'
        },
        'whoami': {
            type: 'command',
            description: 'Print current user',
            category: 'System Info',
            syntax: 'whoami',
            details: 'Displays the current username.',
            example: 'whoami',
            docUrl: 'https://man7.org/linux/man-pages/man1/whoami.1.html'
        },
        'hostname': {
            type: 'command',
            description: 'Show or set system hostname',
            category: 'System Info',
            syntax: 'hostname [options] [name]',
            details: 'Displays or sets the system hostname.',
            example: 'hostname',
            docUrl: 'https://man7.org/linux/man-pages/man1/hostname.1.html'
        },
        'date': {
            type: 'command',
            description: 'Display or set date and time',
            category: 'System Info',
            syntax: 'date [options] [+format]',
            details: 'Shows or sets system date and time. Supports custom formatting.',
            example: 'date +%Y-%m-%d',
            docUrl: 'https://man7.org/linux/man-pages/man1/date.1.html'
        },
        'uptime': {
            type: 'command',
            description: 'Show system uptime',
            category: 'System Info',
            syntax: 'uptime [options]',
            details: 'Displays how long the system has been running.',
            example: 'uptime',
            docUrl: 'https://man7.org/linux/man-pages/man1/uptime.1.html'
        },
        'wget': {
            type: 'command',
            description: 'Download files from web',
            category: 'Networking',
            syntax: 'wget [options] url',
            details: 'Downloads files from HTTP, HTTPS, and FTP servers.',
            example: 'wget https://example.com/file.zip',
            docUrl: 'https://man7.org/linux/man-pages/man1/wget.1.html'
        },
        'curl': {
            type: 'command',
            description: 'Transfer data with URLs',
            category: 'Networking',
            syntax: 'curl [options] url',
            details: 'Transfers data using various protocols. More versatile than wget.',
            example: 'curl -O https://example.com/file.zip',
            docUrl: 'https://man7.org/linux/man-pages/man1/curl.1.html'
        },
        'ssh': {
            type: 'command',
            description: 'Secure shell client',
            category: 'Networking',
            syntax: 'ssh [options] [user@]hostname',
            details: 'Connects to remote systems securely via SSH protocol.',
            example: 'ssh user@server.com',
            docUrl: 'https://man7.org/linux/man-pages/man1/ssh.1.html'
        },
        'scp': {
            type: 'command',
            description: 'Secure copy files',
            category: 'Networking',
            syntax: 'scp [options] source dest',
            details: 'Copies files between hosts using SSH.',
            example: 'scp file.txt user@server:/path/',
            docUrl: 'https://man7.org/linux/man-pages/man1/scp.1.html'
        },
        'rsync': {
            type: 'command',
            description: 'Remote file synchronization',
            category: 'Networking',
            syntax: 'rsync [options] source dest',
            details: 'Efficiently synchronizes files between locations. Supports incremental transfers.',
            example: 'rsync -avz /source/ user@server:/dest/',
            docUrl: 'https://man7.org/linux/man-pages/man1/rsync.1.html'
        },
        'ping': {
            type: 'command',
            description: 'Test network connectivity',
            category: 'Networking',
            syntax: 'ping [options] host',
            details: 'Sends ICMP echo requests to test network connectivity.',
            example: 'ping -c 4 google.com',
            docUrl: 'https://man7.org/linux/man-pages/man8/ping.8.html'
        },
        'netstat': {
            type: 'command',
            description: 'Network statistics',
            category: 'Networking',
            syntax: 'netstat [options]',
            details: 'Displays network connections, routing tables, and interface statistics.',
            example: 'netstat -tuln',
            docUrl: 'https://man7.org/linux/man-pages/man8/netstat.8.html'
        },
        'ifconfig': {
            type: 'command',
            description: 'Configure network interfaces',
            category: 'Networking',
            syntax: 'ifconfig [interface] [options]',
            details: 'Displays or configures network interfaces (deprecated, use ip instead).',
            example: 'ifconfig eth0',
            docUrl: 'https://man7.org/linux/man-pages/man8/ifconfig.8.html'
        },
        'ip': {
            type: 'command',
            description: 'Show/manipulate routing and devices',
            category: 'Networking',
            syntax: 'ip [options] object command',
            details: 'Modern replacement for ifconfig, route, etc. Manages network configuration.',
            example: 'ip addr show',
            docUrl: 'https://man7.org/linux/man-pages/man8/ip.8.html'
        },
        'head': {
            type: 'command',
            description: 'Output first part of files',
            category: 'Text Processing',
            syntax: 'head [options] [file...]',
            details: 'Displays first lines of files. Default is 10 lines. Use -n to specify count.',
            example: 'head -n 20 file.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/head.1.html'
        },
        'tail': {
            type: 'command',
            description: 'Output last part of files',
            category: 'Text Processing',
            syntax: 'tail [options] [file...]',
            details: 'Displays last lines of files. Use -f to follow file updates in real-time.',
            example: 'tail -f /var/log/syslog',
            docUrl: 'https://man7.org/linux/man-pages/man1/tail.1.html'
        },
        'wc': {
            type: 'command',
            description: 'Count lines, words, bytes',
            category: 'Text Processing',
            syntax: 'wc [options] [file...]',
            details: 'Counts lines, words, and bytes in files. Use -l for lines only.',
            example: 'wc -l file.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/wc.1.html'
        },
        'sort': {
            type: 'command',
            description: 'Sort lines of text',
            category: 'Text Processing',
            syntax: 'sort [options] [file...]',
            details: 'Sorts lines of text files. Use -n for numeric sort, -r for reverse.',
            example: 'sort -n numbers.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/sort.1.html'
        },
        'uniq': {
            type: 'command',
            description: 'Remove duplicate lines',
            category: 'Text Processing',
            syntax: 'uniq [options] [file...]',
            details: 'Filters out repeated lines. Input must be sorted. Use -c to count occurrences.',
            example: 'sort file.txt | uniq -c',
            docUrl: 'https://man7.org/linux/man-pages/man1/uniq.1.html'
        },
        'cut': {
            type: 'command',
            description: 'Remove sections from lines',
            category: 'Text Processing',
            syntax: 'cut [options] [file...]',
            details: 'Extracts sections from each line. Use -d for delimiter, -f for fields.',
            example: 'cut -d: -f1 /etc/passwd',
            docUrl: 'https://man7.org/linux/man-pages/man1/cut.1.html'
        },
        'tr': {
            type: 'command',
            description: 'Translate or delete characters',
            category: 'Text Processing',
            syntax: 'tr [options] set1 [set2]',
            details: 'Translates or deletes characters from input.',
            example: 'echo "hello" | tr a-z A-Z',
            docUrl: 'https://man7.org/linux/man-pages/man1/tr.1.html'
        },
        'diff': {
            type: 'command',
            description: 'Compare files line by line',
            category: 'Text Processing',
            syntax: 'diff [options] file1 file2',
            details: 'Compares files and shows differences. Use -u for unified format.',
            example: 'diff -u old.txt new.txt',
            docUrl: 'https://man7.org/linux/man-pages/man1/diff.1.html'
        },
        'ln': {
            type: 'command',
            description: 'Create links between files',
            category: 'File Operations',
            syntax: 'ln [options] target linkname',
            details: 'Creates hard or symbolic links. Use -s for symbolic (soft) links.',
            example: 'ln -s /path/to/file linkname',
            docUrl: 'https://man7.org/linux/man-pages/man1/ln.1.html'
        },
        'which': {
            type: 'command',
            description: 'Locate a command',
            category: 'System Info',
            syntax: 'which command',
            details: 'Shows the full path of shell commands.',
            example: 'which python',
            docUrl: 'https://man7.org/linux/man-pages/man1/which.1.html'
        },
        'whereis': {
            type: 'command',
            description: 'Locate binary, source, and manual',
            category: 'System Info',
            syntax: 'whereis [options] name',
            details: 'Locates binary, source, and manual page files for a command.',
            example: 'whereis bash',
            docUrl: 'https://man7.org/linux/man-pages/man1/whereis.1.html'
        },
        'man': {
            type: 'command',
            description: 'Display manual pages',
            category: 'Documentation',
            syntax: 'man [section] command',
            details: 'Displays the manual page for a command.',
            example: 'man ls',
            docUrl: 'https://man7.org/linux/man-pages/man1/man.1.html'
        },
        'history': {
            type: 'command',
            description: 'Command history',
            category: 'Shell',
            syntax: 'history [n]',
            details: 'Displays command history. Use !n to execute command number n.',
            example: 'history 20',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-History-Builtins'
        }
    },

    // Operators
    operators: {
        '|': {
            type: 'operator',
            description: 'Pipe operator',
            category: 'Redirection',
            details: 'Sends output of one command as input to another command.',
            example: 'ls -l | grep ".txt"',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Pipelines'
        },
        '>': {
            type: 'operator',
            description: 'Redirect output',
            category: 'Redirection',
            details: 'Redirects standard output to a file, overwriting existing content.',
            example: 'echo "text" > file.txt',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Redirections'
        },
        '>>': {
            type: 'operator',
            description: 'Append output',
            category: 'Redirection',
            details: 'Redirects standard output to a file, appending to existing content.',
            example: 'echo "text" >> file.txt',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Redirections'
        },
        '<': {
            type: 'operator',
            description: 'Redirect input',
            category: 'Redirection',
            details: 'Redirects file content as standard input to a command.',
            example: 'wc -l < file.txt',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Redirections'
        },
        '&&': {
            type: 'operator',
            description: 'Logical AND',
            category: 'Control',
            details: 'Executes second command only if first succeeds (returns 0).',
            example: 'mkdir dir && cd dir',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Lists'
        },
        '||': {
            type: 'operator',
            description: 'Logical OR',
            category: 'Control',
            details: 'Executes second command only if first fails (returns non-zero).',
            example: 'command || echo "Failed"',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Lists'
        },
        ';': {
            type: 'operator',
            description: 'Command separator',
            category: 'Control',
            details: 'Separates commands to run sequentially.',
            example: 'cd /tmp; ls',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Lists'
        },
        '&': {
            type: 'operator',
            description: 'Background execution',
            category: 'Control',
            details: 'Runs command in background, returning control to shell immediately.',
            example: 'long_command &',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Lists'
        },
        '$': {
            type: 'operator',
            description: 'Variable expansion',
            category: 'Variables',
            details: 'Expands variable value. Also used for command substitution with $().',
            example: 'echo $HOME',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Shell-Parameter-Expansion'
        }
    },

    // Test Operators
    testOperators: {
        '-f': {
            type: 'test',
            description: 'File exists and is regular file',
            category: 'File Tests',
            details: 'Returns true if file exists and is a regular file.',
            example: '[ -f /etc/passwd ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-d': {
            type: 'test',
            description: 'Directory exists',
            category: 'File Tests',
            details: 'Returns true if file exists and is a directory.',
            example: '[ -d /var/log ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-e': {
            type: 'test',
            description: 'File exists',
            category: 'File Tests',
            details: 'Returns true if file exists (any type).',
            example: '[ -e /tmp/file ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-r': {
            type: 'test',
            description: 'File is readable',
            category: 'File Tests',
            details: 'Returns true if file exists and is readable.',
            example: '[ -r file.txt ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-w': {
            type: 'test',
            description: 'File is writable',
            category: 'File Tests',
            details: 'Returns true if file exists and is writable.',
            example: '[ -w file.txt ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-x': {
            type: 'test',
            description: 'File is executable',
            category: 'File Tests',
            details: 'Returns true if file exists and is executable.',
            example: '[ -x script.sh ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-z': {
            type: 'test',
            description: 'String is empty',
            category: 'String Tests',
            details: 'Returns true if string length is zero.',
            example: '[ -z "$var" ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-n': {
            type: 'test',
            description: 'String is not empty',
            category: 'String Tests',
            details: 'Returns true if string length is non-zero.',
            example: '[ -n "$var" ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-eq': {
            type: 'test',
            description: 'Numeric equality',
            category: 'Numeric Tests',
            details: 'Returns true if integers are equal.',
            example: '[ $a -eq $b ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-ne': {
            type: 'test',
            description: 'Numeric inequality',
            category: 'Numeric Tests',
            details: 'Returns true if integers are not equal.',
            example: '[ $a -ne $b ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-lt': {
            type: 'test',
            description: 'Less than',
            category: 'Numeric Tests',
            details: 'Returns true if first integer is less than second.',
            example: '[ $a -lt $b ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-gt': {
            type: 'test',
            description: 'Greater than',
            category: 'Numeric Tests',
            details: 'Returns true if first integer is greater than second.',
            example: '[ $a -gt $b ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-le': {
            type: 'test',
            description: 'Less than or equal',
            category: 'Numeric Tests',
            details: 'Returns true if first integer is less than or equal to second.',
            example: '[ $a -le $b ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        },
        '-ge': {
            type: 'test',
            description: 'Greater than or equal',
            category: 'Numeric Tests',
            details: 'Returns true if first integer is greater than or equal to second.',
            example: '[ $a -ge $b ]',
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions'
        }
    }
};

// Get explanation for a token
export function getExplanation(tokenValue, tokenType) {
    const normalized = tokenValue.trim().toLowerCase();

    // Check all knowledge categories
    const allKnowledge = {
        ...bashKnowledge.builtins,
        ...bashKnowledge.controlStructures,
        ...bashKnowledge.commands,
        ...bashKnowledge.operators,
        ...bashKnowledge.testOperators
    };

    // Try exact match
    if (allKnowledge[normalized]) {
        return allKnowledge[normalized];
    }

    // Provide type-specific explanations
    if (tokenType === 'variable') {
        return {
            type: 'variable',
            description: 'Variable reference',
            details: `Variable: ${tokenValue}`,
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Shell-Parameters'
        };
    }

    if (tokenType === 'string') {
        return {
            type: 'string',
            description: 'String literal',
            details: `String value: ${tokenValue}`,
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Quoting'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric value',
            details: `Number: ${tokenValue}`,
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html'
        };
    }

    if (tokenType === 'option') {
        return {
            type: 'option',
            description: 'Command option/flag',
            details: `Command option: ${tokenValue}`,
            docUrl: 'https://www.gnu.org/software/bash/manual/bash.html'
        };
    }

    // Default for unknown tokens
    return {
        type: 'unknown',
        description: 'Bash syntax element',
        details: `Token: ${tokenValue}`,
        docUrl: 'https://www.gnu.org/software/bash/manual/bash.html'
    };
}
