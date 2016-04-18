# Assignment 1 - Node and Git basics

Run the ``npm install && npm test`` command in the working directory.
It will output a message similar to:

	$ npm install && npm test
	npm notice created a lockfile as package-lock.json. You should commit this file.
	npm WARN dare0a-node@1.0.0 No license field.

	added 332 packages in 20.449s

        > dare0a-node@1.0.0 test /tmp/github.com/bctechnologies/dare0a-node
        > node_modules/nodeunit/bin/nodeunit


        test
        ✖ test greet

        Error: Assignment not fixed yet


        FAILURES: 1/1 assertions failed (11ms)

Apparently, there's an error in the code. Fix it by changing the
file lib/assignment.rb. Don't change any other files! You are
done when the rake command displays:

        1 runs, 2 assertions, 0 failures, 0 errors, 0 skips

Now commit your changes and generate a patch:

        git format-patch origin/master

Send the patch file to developer-assessment@bayard-consulting.com
