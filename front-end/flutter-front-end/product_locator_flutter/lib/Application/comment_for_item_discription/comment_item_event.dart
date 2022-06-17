part of 'comment_item_disc_bloc.dart';

// import 'package:equatable/equatable.dart';
class CommentItemDiscEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends CommentItemDiscEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class CommentItemDiscPageOpened extends CommentItemDiscEvent {
  // final String? email;
  // final String? password;
  // LoginButtonPressd({this.email, this.password});
}

class CommentItemDiscErrorEvent extends CommentItemDiscEvent {
  final String? message;
  CommentItemDiscErrorEvent({this.message});
}
