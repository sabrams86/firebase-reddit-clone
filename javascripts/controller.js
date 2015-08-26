app.controller("NavbarController", function ($scope) {
  $scope.sortOrder = "Sort By Votes";
  $scope.newPost = false;
  $scope.showComments = false;
  $scope.showCommentForm = false;
  $scope.showPostForm = function () {
    $scope.newPost = !$scope.newPost;
  }
  $scope.createPost = function () {
    var post = {};
    post.title = $scope.title;
    post.author = $scope.author;
    post.url = $scope.url;
    post.description = $scope.description;
    post.date = Date.now();
    post.votes = 0;
    post.comments = [];
    posts.push(post);
    $scope.showPostForm();
    $scope.title = '';
    $scope.author = '';
    $scope.url = '';
    $scope.description = '';
    $scope.userForm.$setPristine();
  }
  $scope.postComment = function () {
    var comment = {};
    comment.name = this.comments.name;
    comment.content = this.comments.content;
    this.post.comments.push(comment);
    this.showCommentForm = !this.showCommentForm;
    this.comments.name = '';
    this.comments.content = '';
    this.showComments = true;
    $scope.commentForm.$setPristine();
  }
  $scope.orderVotes = function () {
    $scope.sortOrder = "Sort By Votes";
    $scope.order = 'votes';
    $scope.orderDir = 'reverse';
  }
  $scope.orderDates = function () {
    $scope.sortOrder = "Sort By Dates";
    $scope.order = 'date';
    $scope.orderDir = 'reverse';
  }
  $scope.orderTitles = function () {
    $scope.sortOrder = "Sort By Titles";
    $scope.order = 'title';
    $scope.orderDir = '';
  }
  $scope.order = 'votes';
  $scope.orderDir = 'reverse';
  $scope.posts = posts;
  $scope.upVote = function () {
    this.post.votes += 1;
  }
  $scope.downVote = function () {
    this.post.votes -= 1;
  }
  $scope.commentShow = function () {
    this.showComments = !this.showComments;
  }
  $scope.commentFormShow = function () {
    this.showCommentForm = !this.showCommentForm;
  }
})
