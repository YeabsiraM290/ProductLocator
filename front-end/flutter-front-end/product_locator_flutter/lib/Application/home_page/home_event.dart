part of 'home_bloc.dart';

// import 'package:equatable/equatable.dart';
class HomeEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class StartEvent extends HomeEvent {}

// class LoginLoadingState extends AuthState {}

// class UserLoginSuccessState extends AuthState {}

class HomePageOpened extends HomeEvent {
  // final String? id;
  // // final String? password;
  // HomePageOpened(this.id);
}

class HomeErrorEvent extends HomeEvent {
  final String? message;
  HomeErrorEvent({this.message});
}
