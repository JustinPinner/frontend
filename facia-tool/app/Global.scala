import java.io.File
import play.api._
import services.FaciaToolLifecycle

object Global extends FaciaToolLifecycle with GlobalSettings {

  lazy val devConfig = Configuration.from(Map("session.secure" -> "false"))

  override def onLoadConfig(config: Configuration, path: File, classloader: ClassLoader, mode: Mode.Mode): Configuration = {
    val newConfig: Configuration = if (mode == Mode.Dev) config ++ devConfig else config
    super.onLoadConfig(newConfig, path, classloader, mode)
  }
}