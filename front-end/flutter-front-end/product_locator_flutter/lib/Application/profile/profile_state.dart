part of 'profile_bloc.dart';

class ProfileState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class ProfileInitState extends ProfileState {}

class ProfileLoadingState extends ProfileState {}

class ProfileFetchedState extends ProfileState {
  final ProfileModel profilelist;
  ProfileFetchedState(this.profilelist);
  @override
  List<Object> get props => [profilelist];
}

class LoginErrorState extends ProfileState {
  final String message;
  LoginErrorState({required this.message});
}
