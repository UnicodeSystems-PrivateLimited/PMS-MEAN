System.register([], function(exports_1) {
    var Project;
    return {
        setters:[],
        execute: function() {
            Project = (function () {
                function Project(id, name, description) {
                    this.id = id;
                    this.name = name;
                    this.description = description;
                }
                return Project;
            })();
            exports_1("Project", Project);
        }
    }
});
