import ThreadComponent from './src/thread/ThreadComponent'
import ThreadComposite from './src/thread/ThreadComposite'
import ThreadLeaf from './src/thread/ThreadLeaf'
import IUser from './src/user/IUser'
import UserDeveloper from './src/user/userDeveloper'

const user = new UserDeveloper('John Doe')
const thread = new ThreadComposite('Hello, World!', user)
thread.addThread(new ThreadComposite('How are you?', user))
const reply = thread.getThreads()[0] as ThreadComposite
reply.addThread(new ThreadLeaf('I am fine.', user))
reply.addThread(new ThreadLeaf('I am fine too.', user))
thread.display()
