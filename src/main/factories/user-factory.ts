import { CreateUserController } from '../../hipet/controllers'
import { LoginUserController } from '../../hipet/controllers/user/login-user-controllers'
import { MongoUserRepository } from '../../hipet/repositories/implementations/user-repository'
import { UserUseCases } from '../../hipet/usecases/implementations'
import { LoginUserUseCase } from '../../hipet/usecases/implementations/login-user-usecases'

export const makeCreateUserController = (): CreateUserController => {
  const userRepository = new MongoUserRepository()
  const userUseCases = new UserUseCases({ userRepository })

  return new CreateUserController(userUseCases)
}

export const makeLoginUserController = (): LoginUserController => {
  const userRepository = new MongoUserRepository()
  const loginUseCases = new LoginUserUseCase({ userRepository })

  return new LoginUserController(loginUseCases)
}
