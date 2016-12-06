<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Kanban Board</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="<?php echo URL ?>css/style.css">
</head>
<body>

<header>
    <nav>
        <div class="nav-wrapper">
            <div class="container">
            </div>

            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Menu</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.php">Brand</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <form style="float: right; margin-right: 20px"
                                  action="http://localhost/todo-mvc/home/logout" method="post">
                                <span>Xin chào <?php echo $_SESSION["username"] ?></span>
                                <input type="submit" value="Logout" name="btn-logout" class="btn-info btn-sm"
                                       id="btn-logout">
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="from_login">


        </div>
    </nav>
</header>

<section class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="card" style="margin-bottom: 20px;">
                <h5>TO DO</h5>
                <div class="collection sorted-list todo">
                    <?php
                    foreach ($listToDo as $todo) {
                        ?>
                        <div class="row list">
                            <span id="row-content-todo-<?php echo $todo['id'] ?>"><?php echo $todo['content'] ?></span>
                            <a href="javascript:void(0)" class="del"
                               onclick="deleteContent(<?php echo $todo['id'] ?>, <?php echo $todo['status'] ?>)">
                                <span class="glyphicon glyphicon-remove"></span>
                            </a>
                            <a href="javascript:void(0)" class="next"
                               onclick="updateStatus(<?php echo $todo['id'] ?>, <?php echo $todo['status'] ?>)">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                            <a href="javascript:void(0)" class="edit" id="edit_todo"
                               onclick="showedit(<?php echo $todo['id'] ?>)">
                                <span class="glyphicon glyphicon-edit"></span>
                            </a>
                        </div>
                        <?php
                    }
                    ?>
                    <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <input type="hidden" id="id_edit">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                                </div>
                                <div class="modal-body">

                                    <form action="" method="post">
                                        <input type="text" name="todo_edit" id="todo_edit" class="form-control" value=""
                                               title="" required="required">
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" onclick="edit()" class="btn btn-primary" name="edit">Save
                                        changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <form action="http://localhost/todo-mvc/todo/add" method="post" class="add_content">
                <div class="input-field col-md-12">
                    <div class="col-sm-9">
                        <input type="hidden" id="user_id" value="<?php echo $_SESSION["id_user"] ?>" name="user_id">
                        <input placeholder="New Job" id="content" class="form-control" type="text"
                               name="content">
                    </div>
                    <div class="col-sm-3">
                        <button type="button" class="btn btn-primary"
                                onclick="addContent()">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-4">
            <div class="card">
                <h5>DOING</h5>
                <div class="collection sorted-list doing">
                    <?php
                    foreach ($listDoing as $doing) {
                        ?>
                        <div class="row list">
                            <span
                                id="row-content-doing-<?php echo $doing['id'] ?>"><?php echo $doing['content'] ?></span>
                            <a href="javascript:void(0)" class="del"
                               onclick="deleteContent(<?php echo $doing['id'] ?>, <?php echo $doing['status'] ?>)">
                                <span class="glyphicon glyphicon-remove"></span>
                            </a>
                            <a href="javascript:void(0)" class="next"
                               onclick="updateStatus(<?php echo $doing['id'] ?>, <?php echo $doing['status'] ?>)">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                            <a href="javascript:void(0)" class="edit"
                               onclick="undoStatus(<?php echo $doing['id'] ?>, <?php echo $doing['status'] ?>)">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                        </div>
                        <?php
                    }
                    ?>
                </div>

            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <h5>DONE</h5>
                <div class="collection sorted-list done">
                    <?php
                    foreach ($listDone as $done) {
                        ?>
                        <div class="row list">
                            <span id="row-content-done-<?php echo $done['id'] ?>"><?php echo $done['content'] ?></span>
                            <a href="javascript:void(0)" class="del"
                               onclick="deleteContent(<?php echo $done['id'] ?>, <?php echo $done['status'] ?>)">
                                <span class="glyphicon glyphicon-remove"></span>
                            </a>
                            <a href="javascript:void(0)" class="edit"
                               onclick="undoStatus(<?php echo $done['id'] ?>, <?php echo $done['status'] ?>)">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>


</section>

<script type="text/javascript" src="<?php echo URL ?>js/jquery-3.1.0.min.js"></script>
<script type="text/javascript" src="<?php echo URL ?>js/jquery-ui.min.js"></script>
<script type="text/javascript" src="<?php echo URL ?>js/bootstrap.min.js"></script>
<script type="text/javascript" src="<?php echo URL ?>js/script.js"></script>

</body>
</html>