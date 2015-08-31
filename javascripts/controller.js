app.controller("NavbarController", ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
  var data = new Firebase('https://sa-todolist.firebaseio.com/reddit');
  $scope.posts = $firebaseArray(data);
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
    $scope.posts.$add(post).then(function (data) {
      $scope.showPostForm();
      $scope.title = '';
      $scope.author = '';
      $scope.url = '';
      $scope.description = '';
      $scope.userForm.$setPristine();
    })
  }
  //need to convert
  $scope.postComment = function () {
    if (!this.post.comments){
      this.post.comments = [];
    }
    var comment = {};
    comment.name = this.comments.name;
    comment.content = this.comments.content;
    this.post.comments.push(comment);
    $scope.posts.$save(this.post);

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
  $scope.upVote = function (post) {
    this.post.votes += 1;
    $scope.posts.$save(post);
  }
  $scope.downVote = function (post) {
    this.post.votes -= 1;
    $scope.posts.$save(post);
  }
  $scope.commentShow = function () {
    this.showComments = !this.showComments;
  }
  $scope.commentFormShow = function () {
    this.showCommentForm = !this.showCommentForm;
  }
}])
