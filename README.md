
PS E:\MERN\frontend> git init
Initialized empty Git repository in E:/MERN/frontend/.git/                                                                          e 
PS E:\MERN\frontend> git remote add origin https://github.com/Nitighya/React_Forms.git
PS E:\MERN\frontend> git remote -v
origin  https://github.com/Nitighya/React_Forms.git (fetch)
origin  https://github.com/Nitighya/React_Forms.git (push)
PS E:\MERN\frontend> git commit -m "first commit"
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'HP@DESKTOP-HKPVFHA.(none)')
PS E:\MERN\frontend> git config --global user.email "nitighya25@gmail.com"
PS E:\MERN\frontend> git config --global user.name "Nitighya"                         
PS E:\MERN\frontend> git commit -m "first commit"
On branch master

Initial commit
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        README.md
        package-lock.json
        package.json
        public/
        src/

nothing added to commit but untracked files present (use "git add" to track)
PS E:\MERN\frontend> git add .
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/manifest.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/robots.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/App.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/index.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/reportWebVitals.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/setupTests.js', LF will be replaced by CRLF the next time Git touches it
PS E:\MERN\frontend> git commit -m "first commit"
[master (root-commit) 46bbcc8] first commit
 18 files changed, 18078 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 package-lock.json
 create mode 100644 public/favicon.ico
 create mode 100644 public/index.html
 create mode 100644 public/logo192.png
 create mode 100644 public/logo512.png
 create mode 100644 public/manifest.json
 create mode 100644 public/robots.txt
 create mode 100644 src/App.css
 create mode 100644 src/App.js
 create mode 100644 src/Post/AddData.js
 create mode 100644 src/Post/Form.js
 create mode 100644 src/index.css
 create mode 100644 src/index.js
 create mode 100644 src/reportWebVitals.js
 create mode 100644 src/setupTests.js
PS E:\MERN\frontend> git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS E:\MERN\frontend> git push --set-upstream origin master
info: please complete authentication in your browser...
Enumerating objects: 23, done.
Counting objects: 100% (23/23), done.
Delta compression using up to 4 threads
Compressing objects: 100% (23/23), done.
Writing objects: 100% (23/23), 173.01 KiB | 5.41 MiB/s, done.
Total 23 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Nitighya/React_Forms.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.
PS E:\MERN\frontend>
